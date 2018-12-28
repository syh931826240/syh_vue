import {
  RECEIVE_BLOG,
  RECEIVE_COURSE,
  RECEIVE_DELICIOUS,
  USE_INFO,
  DEELICIOUS_COMMENT,
  SENIOR_COMMENT,
  DELICIOUS_OUTLINE
} from "./mutation_types"


export default {
  [RECEIVE_BLOG](state,
    blog
  ) {
   console.log(state.receive_blog )
   Object.assign(state.receive_blog, state.receive_blog, blog);
    

  },
  [USE_INFO](state, 
    user_info
  ) {
    state.user_info = user_info


  },
  [RECEIVE_DELICIOUS](state, {
    delicious
  }) {


  },
  [DEELICIOUS_COMMENT](state, 
    delicious_comment
  ) {
   state.delicious_comment.push(delicious_comment.cm);

  },
  [SENIOR_COMMENT](state, 
    senior_comment
  ) {
   state.senior_comment=senior_comment.cm

  },
  [RECEIVE_COURSE](state, {
    course
  }) {





  },
  [DELICIOUS_OUTLINE](state, {
    course
  }) {





  }
}
