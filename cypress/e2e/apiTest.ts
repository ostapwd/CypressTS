import apiController from '../api/apiController'
import getPhotosSchema from '../jsonSchemas/getPhotosSchema.json'
import addPhotoSchema from '../jsonSchemas/addPhotoSchema.json'
import editPhotoSchema from '../jsonSchemas/editPhotoSchema.json'

import { validate } from 'jsonschema'

describe('Photos API tests', () => {
  it('GET photos test', () => {
    apiController.getPhotos().then((response) => {
      expect(response.status).to.be.equal(200)

      let result = validate(response.body, getPhotosSchema)
      expect(result.valid, result.errors.toString()).to.be.true
    })
  })

  describe('POST photo API tests', () => {
    it('POST a new photo', () => {
      let newPhoto = {
        albumId: 1,
        title: 'Test photo name',
        url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFBa3G11OUBYADP7ouSBgwiiRzSYorF4dfg&usqp=CAU',
        thumbnailUrl:
          'https://static-s.aa-cdn.net/img/ios/1444683307/4a564c660980a2433227ba680d656889?v=1',
      }
      apiController.addPhoto(newPhoto).then((response) => {
        expect(response.status).to.be.equal(201)

        let result = validate(response.body, addPhotoSchema)
        expect(result.valid, result.errors.toString()).to.be.true

        newPhoto['id'] = response.body.id
        expect(response.body).to.deep.equal(newPhoto)
      })
    })

    it('Verify a new photo exists in the application', () => {
      apiController.getPhotos().then((response) => {
        expect(response.status).to.be.equal(200)
      })
    })
  })

  it('PUT photo test', () => {
    let updatedPhoto = {
      albumId: 1,
      title: 'Testing name',
      url: 'testupdate.com',
      thumbnailUrl: 'updatetest.org',
    }
    apiController.editPhoto(1, updatedPhoto).then((response) => {
      expect(response.status).to.be.equal(200)

      let result = validate(response.body, editPhotoSchema)
      expect(result.valid, result.errors.toString()).to.be.true

      updatedPhoto['id'] = response.body.id
      expect(response.body).to.deep.equal(updatedPhoto)
    })
  })

  it('DELETE photo test', () => {
    apiController.deletePhoto(1).then((response) => {
      expect(response.status).to.be.equal(200)
    })
  })
})
