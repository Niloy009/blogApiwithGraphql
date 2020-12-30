import formatMongooseValidationError from './formatMongooseValidationError'
import { UserInputError } from 'apollo-server-express'

const ApolloErrorFormatter = (err) => {
	if (err?.originalError?.name === 'ValidationError') {
		let formattedErrors = formatMongooseValidationError(
			err?.originalError?.errors
		)

		return new UserInputError(
			'Hold on!! You have some validation error!!',
			formattedErrors
		)
	}

	return err
}

export default ApolloErrorFormatter
