import Mn from 'backbone.marionette'
import template from './template.hbs'
import UsersView from '../users/view'
import PostsView from '../posts/view'
import Collection from '../posts/collection'

export default Mn.View.extend({
    
    template: template,
    
    regions: {
        content: '#content'
    },
    
    showUsers() {
        this.getRegion('content').show(new UsersView())
    },
    
    showPosts() {
        new Collection().fetch().then(resp =>
            this.getRegion('content')
            .show(new PostsView({
                collection: resp.collection
            }))
        )
    }
    
})
