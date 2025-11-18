import axios from 'axios'
import toast from 'react-hot-toast'
const BASE_URL = process.env.REACT_APP_BASE_URL

export const ApiPostRequest = async (
  e,
  endPoint,
  setLoading,
  resourceName,
  data,
) => {
  e.preventDefault()
  setLoading((prev) => !prev)
  try {
    const response = await axios.post(`${BASE_URL}/${endPoint}`, data)
    if (response.statusText.includes('OK')) {
      setLoading((prev) => !prev)
      toast.success(`${resourceName} Created Successfully`)
    }
  } catch (err) {
    setLoading((prev) => !prev)
    return toast.error(err?.response?.data?.message)
  }
}

export const ApiPutRequest = async (
  endPoint,
  e,
  id,
  info,
  setLoading,
  dispatch,
  resourceName,
) => {
  e.preventDefault()
  setLoading(true)
  dispatch({ type: 'UPDATE_START' })
  try {
    const response = await axios.put(`${BASE_URL}/${endPoint}/${id} `, info)
    if (response.statusText.includes('OK')) {
      dispatch({ type: 'UPDATE_SUCCESS', payload: response.data.data })
      setLoading(false)
      toast.success(`${resourceName} Updated Successfully`)
    }
    return response.statusText
  } catch (err) {
    dispatch({ type: 'UPDATE_FAIL', payload: err.response.data.message })
    setLoading(false)
    toast.success(err.response.data.message)
  }
}

export const ApiDeleteRequest = async (endPoint, id, resourceName) => {
  try {
    await axios.delete(`${BASE_URL}/${endPoint}/${id}`)
    toast.success(`${resourceName} Deleted Successfully`)
    // window.location.reload()
  } catch (err) {}
}

export const ApiPostImageRequest = async (e, setLoadingImage, setImageUrl) => {
  try {
    setLoadingImage(true)
    e.preventDefault()
    const data = new FormData()
    data.append('file', e.target.files[0])
    data.append('upload_preset', 'upload')

    if (e.target.files[0]) {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/ecommerceSystem/image/upload`,
        data,
      )
      if (response.statusText.includes('OK')) {
        setLoadingImage(false)
        setImageUrl(response?.data?.secure_url)
        toast.success(`Image Upload Successfully`)
      }
    }
  } catch (err) {
    setLoadingImage(false)
    toast.error(`Failed To Upload Image`)
  }
}

export const ApiLoginUser = async (e, dispatch, setOpenLogin,data) => {
  console.log(BASE_URL)
  e.preventDefault()
  dispatch({ type: 'AUTH_START' })
  try {
    const res = await axios.post(`${BASE_URL}/auth/login`, data)
    dispatch({ type: 'AUTH_SUCCESS', payload: res?.data?.data })
    toast.success('User Login Successfully')
    if (res) {
      return setOpenLogin((prev) => !prev)
    }
  } catch (err) {
    dispatch({ type: 'AUTH_FAIL', payload: err?.response?.data?.message })
    toast.error(err?.response?.data?.message)
    console.log(err?.response?.data?.message)
  }
}

export const follwingByUser = async (e, id, user, setLoading) => {
  e.preventDefault()
  setLoading(true)
  try {
    const response = await axios.put(`${BASE_URL}/users/follw/${id}`, {
      id: user,
    })
    if (response.statusText.includes('OK')) {
      setLoading(false)
      toast.success(`User Follwing Successfully`)
    }
    return response.statusText
  } catch (err) {
    setLoading(false)
    toast.error(err.response.data.message)
  }
}

export const unfollwingByUser = async (e,id, user, setLoading) => {
  e.preventDefault()
  try {
    setLoading(true)
    const response = await axios.put(`${BASE_URL}/users/unfollw/${id}`, {
      id: user,
    })
    // dispatch({ type: 'USER_UNFOLLOW', payload: id })
    // window.location.reload()
    if (response.statusText.includes('OK')) {
      toast.success(`User UnFollwing Successfully`)
      setLoading(false)
    }
    return response.statusText
  } catch (err) {
    setLoading(false)
    toast.error(err.response.data.message)
  }
}

export const likePost = async (id, user) => {
  try {
    await axios.put(`${BASE_URL}/posts/likes/${id}`, { id: user })
    toast.success(`Post Like Successfully`)
  } catch (err) {
    toast.error(err.response.data.message)
  }
}
