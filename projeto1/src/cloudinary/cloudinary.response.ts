import { UploadApiErrorResponse,UploadApiResponse } from "cloudinary";

export type CloudnaryResponse = UploadApiResponse | UploadApiErrorResponse;