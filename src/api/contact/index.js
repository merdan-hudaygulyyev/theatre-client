import { host } from '../api'

export const getContactInfos = async (props) => {
  const response = await host.get(`/api/contact/getcontactinfos`)

  return response
}

export const getAllContacts = async (props) => {
  const response = await host.get(`/api/contact/getallcontacts`)

  return response
}

export const getPendingContacts = async (props) => {
  const response = await host.get(`/api/contact/getpendingcontacts`)

  return response
}

export const postMessage = async message => {
  const response = await host.post(`/api/contact/createcontact`, message)

  return response
}

