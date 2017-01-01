<?php

namespace App\Repositories\Eloquent;

use App\Repositories\Contracts\PostRepositoryContract;
use App\Models\Post;

class PostRepository implements PostRepositoryContract
{
    public $post;

    public function __construct(Post $post)
    {
        $this->post = $post;
    }

    /**
     * Create a new post
     *
     * @param object  $request
     * @return void
     */
    public function create($request)
    {
        $post = $this->post->create([  // TODO modify values in this array
                    "admin" => [
                        "id" => '',
                        "name" => ''
                    ],
                    "category" => [
                        "id" => '',
                        "name" => ''
                    ],
                    "tag" => '',
                    "title" => '',
                    "content" => '',
                    "thumb_img_path" => '',
                    "status" => '',
                    "publication_date" => '',
                ]);
    }

    /**
     * Edit a post
     *
     * @param int  $id
     * @return void
     */
    public function edit($id)
    {
        $post = $this->post->find($id)->update([ // TODO modify values in this array
                    "admin" => [
                        "id" => '',
                        "name" => ''
                    ],
                    "category" => [
                        "id" => '',
                        "name" => ''
                    ],
                    "tag" => '',
                    "title" => '',
                    "content" => '',
                    "thumb_img_path" => '',
                    "status" => '',
                    "publication_date" => '',
                ]);
    }

    /**
     * Update publication status of post
     *
     * @param object  $request
     * @param int  $id
     * @return void
     */
    public function update($request, $id)
    {
        $post = $this->post->find($id)->update([ // TODO modify values in this array
                    "status" => '',
                ]);
    }

    /**
     * Delete a post
     *
     * @return void
     */
    public function delete($id)
    {
        $post = $this->post->find($id)->delete();
    }

    /**
     * Get a single post
     *
     * @param int  $id
     * @return object
     */
     public function getPost($id)
     {
        $post = $this->post->with('admin', 'postImages', 'category', 'comments', 'tags')->find($id);

        return [
            "id" => $post->id,
            "admin" => [
                "id" => $post->admin->id,
                "name" => $post->admin->name
            ],
            "category" => [
                "id" => $post->category->id,
                "name" => $post->category->name
            ],
            "tag" => $post->tags,
            "title" => $post->title,
            "content" => $post->content,
            "thumb_img_path" => $post->thumb_img_path,
            "views" => $post->views,
            "status" => $post->status,
            "publication_date" => $post->publication_date,
            "created_at" => $post->create_at,
            "updated_at" => $post->updated_at,
            "deleted_at" => $post->deleted_at,
            "comment" => $post->comments
        ];
     }

    /**
     * Get posts
     *
     * @return object
     */
     public function getPosts()
     {
        $posts = $this->post->with('admin', 'postImages', 'category', 'comments', 'tags')->get();

        $posts_ary = [];

        foreach ($posts as $post) {
            $posts_ary[]= [
                "id" => $post->id,
                "admin_id" => $post->admin_id,
                "category" => [
                    "id" => $post->category->id,
                    "name" => $post->category->name
                ],
                "tag" => $post->tags,
                "title" => $post->title,
                "content" => $post->content,
                "thumb_img_path" => $post->thumb_img_path,
                "views" => $post->views,
                "status" => $post->status,
                "publication_date" => $post->publication_date,
                "created_at" => $post->create_at,
                "updated_at" => $post->updated_at,
                "deleted_at" => $post->deleted_at,
            ];
        }

        return $posts_ary;
     }
}