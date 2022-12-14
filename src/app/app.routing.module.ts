import {Routes} from '@angular/router';
import {MembersComponent} from './members/members.component';
import {MemberFormComponent} from './member-form/member-form.component';
import {EventsComponent} from './events/events.component';
import {ArticlesComponent} from './articles/articles.component';
import {ToolsComponent} from './tools/tools.component';
import {ArticleFormComponent} from './article-form/article-form.component';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login' ,
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'members' ,
    pathMatch: 'full',
    component: MembersComponent,
  },
  {
    path: 'tools' ,
    pathMatch: 'full',
    component: ToolsComponent,
  },
  {
    path: 'articles' ,
    pathMatch: 'full',
    component: ArticlesComponent,
  },
  {
    path: 'events' ,
    pathMatch: 'full',
    component: EventsComponent,
  },
  {
    path: 'createMember' ,
    pathMatch: 'full',
    component: MemberFormComponent,
  },
  {
    path: 'createArticle' ,
    pathMatch: 'full',
    component: ArticleFormComponent,
  },
  {
    path: 'members/:id/edit' ,
    pathMatch: 'full',
    component: MemberFormComponent,
  },
  {
    path: 'articles/:id/edit' ,
    pathMatch: 'full',
    component: ArticleFormComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'members'
  }
];
