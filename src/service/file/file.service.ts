import instance from '../axios-config';

class FileService {
  upload(payload: FormData) {
    return instance.post('api/drive/upload', payload);
  }
}

export default new FileService();
