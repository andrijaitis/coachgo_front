import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as PostActions from './actions/post.actions';
import * as AuthActions from './actions/auth.actions';
import { Post } from './entities/post.model';
import { AppState } from './app.state';
import { Auth } from './entities/auth.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'couchgo';
  userID: any = 'not logged';
  post: Observable<Post>;
  auth: Observable<Auth>;
  text: string;

  ngOnInit(): void { }

  constructor(private authService: AuthService, private store: Store<AppState>) {
      this.post = this.store.select('post');
      this.auth = this.store.select('auth');

}


editText() {
  this.store.dispatch(new PostActions.EditText(this.text));
}

resetPost() {
  this.store.dispatch(new PostActions.Reset());
}

upvote() {
  this.store.dispatch(new PostActions.Upvote());
}

downvote() {
  this.store.dispatch(new PostActions.Downvote());
}

changeAuhtText() {
  this.store.dispatch(new AuthActions.SetUserEmail('stuff'));
}

}

