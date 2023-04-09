import * as Yup from "yup" 

export interface IProduct {
    id: string,
    name: string,
    price: number,
    original_price: number,
    description: string,
    images: {base_url: string}[],
    brand: {id: number, name: string, slug: string},
    specifications: ISpecification[]
}

export interface ISpecification {
    name: string,
    attributes: {code: string, name: string, value: string}[]
}

export const updateSchema = Yup.object({
    name:Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number().required("Trường dữ liệu bắt buộc"),
    original_price: Yup.number().required("Trường dữ liệu bắt buộc"),
    description: Yup.string().min(10,"Tối thiểu 10 ký tự").required("Trường dữ liệu bắt buộc"),
})

export type updateForm = Yup.InferType<typeof updateSchema>

// Signnup
export const signupSchema = Yup.object({
    firstName: Yup.string().required("Trường dữ liệu bắt buộc"),
    lastName: Yup.string().required("Trường dữ liệu bắt buộc"),
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Mật khẩu không trùng khớp")
  })
  
export type signupForm = Yup.InferType<typeof signupSchema>

//signin
export const signinSchema = Yup.object({
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
})
export type signinForm = Yup.InferType<typeof signinSchema>