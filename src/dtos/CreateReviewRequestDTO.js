import * as yup from 'yup';

import validateSchema from '../validation/schemaValidation';

class CreateReviewRequestDTO {
  constructor({ stars, text }) {
    this.stars = stars;
    this.text = text;

    this.schema = yup.object().shape({
      stars: yup.number(),
      text: yup.string().max(500),
    });
  }

  async validate() {
    await validateSchema(this.schema, {
      stars: this.stars,
      text: this.text,
    });
  }
}

export default CreateReviewRequestDTO;
