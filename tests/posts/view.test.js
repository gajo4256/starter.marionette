import chai from 'chai'
import PostsView from '../../src/app/posts/view'

const expect = chai.expect
let view

describe('PostsView', () => {

    beforeEach('instantiate posts view', () => {
        let collection = new Backbone.Collection()
        view = new PostsView({collection: collection})
    })

    it('should have properties', () => {
        expect(view.template).to.exist
        expect(view.collection).to.exist
    })

    it('should have methods', () => {
        expect(view.serializeData).to.be.a('function')
    })

    it('should serialize data', () => {
        const data = view.serializeData()
        expect(data.posts).to.exist
        expect(data.posts).to.be.an('array')
    })

    it('should render header', () => {
        view.render()
        expect(view.$el.find('h2').text()).to.equal('Posts')
    })

    describe('after render', () => {
        it('should contain collection data', () => {
            view.collection.add({title: 'Post 1', body: "Message body from post 1"})
            view.render()
            expect(view.$el.find('h3').text()).to.equal(view.collection.models[0].get('title'))
            expect(view.$el.find('p').text()).to.equal(view.collection.models[0].get('body'))
        })
    })

})
