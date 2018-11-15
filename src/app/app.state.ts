import { Post } from './entities/post.model';
import { Auth } from './entities/auth.model';

interface AppState {
    post: Post;
    auth: Auth;
  }

  export { AppState };
