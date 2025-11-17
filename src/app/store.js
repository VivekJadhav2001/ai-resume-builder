import { configureStore } from "@reduxjs/toolkit";
import formData from '../features/formDataSlice'


export const store = configureStore({reducer : {formData : formData}})