import { expect, should, use } from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../server.js'; // Ensure this path is correct
import { Story } from '../models/stories.js'; // Ensure this path is correct
import { User } from '../models/user.js'; // Ensure this path is correct

should();
use(chaiHttp);

describe('Stories API', () => {
  // Before each test, empty the database and add a user
  beforeEach((done) => {
    Story.deleteMany({}, (err) => {
      User.deleteMany({}, (err) => {
        const user = new User({
          name: "Test User",
          email: "testuser@example.com",
          password: "password",
        });
        user.save().then(() => done());
      });
    });
  });

  // Test GET all stories
  describe('GET /api/stories', () => {
    it('it should GET all the stories', (done) => {
      chai.request(app)
        .get('/api/stories')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  // Test GET story by ID
  describe('GET /api/stories/:id', () => {
    it('it should GET a story by the given id', (done) => {
      const user = new User({ name: "Test User", email: "testuser@example.com", password: "password" });
      user.save().then((user) => {
        const story = new Story({
          title: "Test Story",
          content: "This is a test story",
          user: user._id,
        });
        story.save().then((story) => {
          chai.request(app)
            .get(`/api/stories/${story.id}`)
            .send(story)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('title');
              res.body.should.have.property('content');
              res.body.should.have.property('_id').eql(story.id);
              done();
            });
        });
      });
    });
  });

  // Test POST create a story
  describe('POST /api/stories', () => {
    it('it should POST a new story', (done) => {
      const user = new User({ name: "Test User", email: "testuser@example.com", password: "password" });
      user.save().then((user) => {
        const story = {
          title: "Test Story",
          content: "This is a test story",
          user: user._id,
        };
        chai.request(app)
          .post('/api/stories')
          .send(story)
          .end((err, res) => {
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.should.have.property('title').eql('Test Story');
            res.body.should.have.property('content').eql('This is a test story');
            done();
          });
      });
    });
  });

  // Test PUT update a story
  describe('PUT /api/stories/:id', () => {
    it('it should UPDATE a story given the id', (done) => {
      const user = new User({ name: "Test User", email: "testuser@example.com", password: "password" });
      user.save().then((user) => {
        const story = new Story({
          title: "Test Story",
          content: "This is a test story",
          user: user._id,
        });
        story.save().then((story) => {
          chai.request(app)
            .put(`/api/stories/${story.id}`)
            .send({ title: "Updated Story", content: "This is an updated test story" })
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('title').eql('Updated Story');
              res.body.should.have.property('content').eql('This is an updated test story');
              done();
            });
        });
      });
    });
  });

  // Test DELETE a story
  describe('DELETE /api/stories/:id', () => {
    it('it should DELETE a story given the id', (done) => {
      const user = new User({ name: "Test User", email: "testuser@example.com", password: "password" });
      user.save().then((user) => {
        const story = new Story({
          title: "Test Story",
          content: "This is a test story",
          user: user._id,
        });
        story.save().then((story) => {
          chai.request(app)
            .delete(`/api/stories/${story.id}`)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('message').eql('Story deleted successfully');
              done();
            });
        });
      });
    });
  });
});
