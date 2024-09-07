import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './entities/posts.entity';
import { Repository } from 'typeorm';

import { RequestPostDto } from './dto/postsIn.dto';
import { plainToInstance } from 'class-transformer';
import { generateSuccessResponse } from 'src/common/utils/generateSuccessRes';
import { ApiSuccessResponseDto } from 'src/common/dto/response.dto';
import { ResponsePostDto } from './dto/postsOut.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postsRepository: Repository<PostEntity>,
  ) {}
  private async checkHeaderConflict(header: string): Promise<void> {
    const existingPostName = await this.postsRepository.findOne({
      where: { header },
    });
    if (existingPostName) {
      throw new HttpException('Name is already taken', HttpStatus.CONFLICT);
    }
  }

  async CreatePost(createPostDto: RequestPostDto): Promise<ResponsePostDto> {
    const newPost = this.postsRepository.create(createPostDto);
    const savePost = await this.postsRepository.save(newPost);
    return plainToInstance(ResponsePostDto, savePost);
  }

  async getPost(id: number): Promise<PostEntity> {
    const post = await this.postsRepository.findOne({ where: { id } });
    if (!post) {
      throw new HttpException('post not found', HttpStatus.NOT_FOUND);
    }
    return post;
  }

  async editPost(
    id: number,
    updatePostDto: RequestPostDto,
  ): Promise<ResponsePostDto> {
    const post = await this.getPost(id);
    if (updatePostDto.header !== post.header) {
      await this.checkHeaderConflict(updatePostDto.header);
    }
    const updatedPost = await this.postsRepository.merge(post, updatePostDto);
    await this.postsRepository.save(updatedPost);

    const newPost = await this.postsRepository.findOne({ where: { id } });
    return plainToInstance(ResponsePostDto, newPost);
  }

  async deletePost(id: number): Promise<ApiSuccessResponseDto> {
    const post = await this.getPost(id);
    await this.postsRepository.remove(post);
    return generateSuccessResponse('post delete');
  }
}
