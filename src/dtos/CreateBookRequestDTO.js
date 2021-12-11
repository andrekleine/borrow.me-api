import * as yup from 'yup';

import validateSchema from '../validation/schemaValidation';

class CreateBookRequestDTO {
  constructor({ title, authors, description, imgLink, googleID }) {
    this.title = title;
    this.authors = authors;
    this.description = description;
    this.imgLink = imgLink;
    this.googleID = googleID;

    this.schema = yup.object().shape({
      title: yup.string().required().min(3).max(500),
      authors: yup.array().of(yup.string().required().min(3).max(150)).required(),
      description: yup.string().min(3).max(5000),
      imgLink: yup.string().min(5).max(2000),
      googleID: yup.string().required().min(3).max(50),
    });
  }

  async validate() {
    await validateSchema(this.schema, {
      title: this.title,
      authors: this.authors,
      description: this.description,
      imgLink: this.imgLink,
      googleID: this.googleID,
    });
  }
}

export default CreateBookRequestDTO;
