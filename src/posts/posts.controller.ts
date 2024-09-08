import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/createPost.dto';

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('add')
  CreatePost(@Body() createPostDto: CreatePostDto) {
    return this.postsService.CreatePost(createPostDto);
  }

  @Get('id')
  getPost(id: number) {
    return this.postsService.getPost(id);
  }

  // @Patch('edit')
  // editPost(updatePostDto: RequestPostDto) {
  //   return this.postsService.editPost(updatePostDto);
  // }
  @Delete('remove')
  deletePost(id: number) {
    return this.postsService.deletePost(id);
  }
}
