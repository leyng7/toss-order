package com.tossorder.repository.post;

import com.tossorder.domain.Post;
import com.tossorder.request.post.PostSearch;

import java.util.List;

public interface PostRepositoryCustom {

    List<Post> getList(PostSearch postSearch);
}
