import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/createPost.dto';
import { RequestPostDto } from './dto/postsIn.dto';

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('add')
  async CreatePost(@Body() createPostDto: CreatePostDto) {
    return await this.postsService.CreatePost(createPostDto);
  }

  @Get(':id')
  async getPost(@Param('id') id: number) {
    return await this.postsService.getPost(id);
  }

  @Patch('edit/:id')
  async editPost(
    @Param('id') id: number,
    @Body() updatePostDto: RequestPostDto,
  ) {
    return await this.postsService.editPost(id, updatePostDto);
  }
  @Delete('remove/:id')
  async deletePost(@Param('id') id: number) {
    return await this.postsService.deletePost(id);
  }
}
