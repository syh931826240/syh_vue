/*import {
  RECEIVE_BLOG,
  RECEIVE_COURSE,
  RECEIVE_DELICIOUS,
  USE_INFO,

} from "./mutation_types"*/


export default {
  record_user(context, payload) {
    context.commit(USE_INFO, payload)
  },
  receive_blog(context, blog_data) {
 
 //   console.log(blog_data)
    context.commit("receive_blog", blog_data);
  }


}
