import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GLOBAL} from '../app/app-config';
import {Member} from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  tab: Member[] = GLOBAL.DB.members;
  constructor(private httpClient: HttpClient) {
  }


  saveMember(objectToSubmit: any): Promise<any> {
    // si j'ai la partie back
    // return this.httpClient.post('linktorestAPI',objectToSubmit).toPromise();
    const memberToSave = {
      ...objectToSubmit,
      id: objectToSubmit.id ?? (Math.random() * 100000).toString(),
      createdDate: objectToSubmit.createdDate ?? new Date().toISOString()
    };
    this.tab = [memberToSave, ...this.tab.filter(item => item.id !== memberToSave.id)];
    return new Promise(resolve => resolve(memberToSave));

  }

  getMemberById(id: string): Promise<Member> {
    // return this.httpClient.get<M
    return new Promise(resolve => resolve(this.tab.filter(item => item.id === id)[0] ?? null));
  }

  delete(id: string): Promise<void> {
    this.tab = this.tab.filter(item => item.id !== id);
    return new Promise(resolve => resolve());
  }

  getAllMembers(): Promise<Member[]> {
    return new Promise(resolve => resolve(this.tab));
  }
}
