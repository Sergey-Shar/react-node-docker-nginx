/**
 * the data that the user specified during registration
 * @param userName - the name that the user specified during registration
 * @param email - the email that the user specified during registration
 * @param password - the password that the user specified during registration
 */
export interface UserCreateModel {
	userName: string
	email: string
	password: string
}
