import instance from '../axios-config';
import {CreateMeetingRequest, Meeting} from "@/types";

class MeetingService {
  getAllEvents() {
    return instance.get('api/joinme/events');
  }

  getEventDetails(id:string) {
    return instance.get(`api/joinme/event/${id}`);
  }

  getMeetingCategories() {
    return instance.get('api/joinme/categories');
  }

  createMeeting(payload:CreateMeetingRequest) {
    return instance.put('api/joinme/events', payload);
  }

  joinEvent(id:string) {
    return instance.post(`api/joinme/event/${id}/join`);
  }

  sendMessage(id:string, message:string) {
    return instance.post(`api/joinme/event/comments`, {id, message});
  }
}

export default new MeetingService();
