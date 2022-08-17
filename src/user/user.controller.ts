import { Body, Controller, Post, Delete, Get, Put, Param, } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NextFunction, Request } from 'express';
import { Usermodeldto } from 'src/dto/usermodel.dto';
import { UserService } from './user.service';

@ApiTags('CRUD')
@Controller('data')
export class UserController {
    constructor(private userservice: UserService) { }
    @Get()
    @ApiOperation({ summary: "fetch all the data" })
    @ApiResponse({
        status: 200,
        description: 'fetched data...'
    })
    @ApiResponse({
        status: 401,
        description: 'bad request'
    })
    fetch() {
        return this.userservice.getuser();

    }
    @Post()
    @ApiOperation({ summary: 'create the data' })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                userid: {
                    type: 'number',
                    example: '23443',
                    description: 'max of 5 numbers'
                },
                username: {
                    type: 'string',
                    example: 'abc123',
                    description: 'unique name of user as alphanum'
                },
                email: {
                    type: 'string',
                    example: 'abc@gmail.com',
                    description: 'email of user'
                },
                password: {
                    type: 'string',
                    example: 'ab@33',
                    description: 'unique password with max of 5 characters'
                }

            }
        }
    })
    @ApiResponse({
        status: 201,
        description: 'data created'
    })
    @ApiResponse({
        status: 400,
        description: 'data not created'
    })
    store(req: Request, @Body() usermodeldto: Usermodeldto, next: NextFunction) {
        return this.userservice.createuser(usermodeldto)
    }

    @Put()
    @ApiOperation({ summary: 'update the data' })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                userid: {
                    type: 'number',
                    example: '23443',
                    description: 'max of 5 numbers'
                },
                username: {
                    type: 'string',
                    example: 'abc123',
                    description: 'unique name of user as alphanum'
                },
                email: {
                    type: 'string',
                    example: 'abc@gmail.com',
                    description: 'it must be in email format'
                },
                password: {
                    type: 'string',
                    example: 'ab@33',
                    description: 'unique password with max of 5 characters'
                }

            }

        }
    })
    @ApiResponse({
        status: 201,
        description: 'data updated'
    })
    @ApiResponse({
        status: 400,
        description: 'data not updated'
    })
    update(
        @Body() usermodeldto: Usermodeldto) {
        return this.userservice.updateuser(usermodeldto)
    }

    @Delete('/:userid')
    @ApiOperation({ summary: 'delete the data' })
    @ApiParam({
        name: 'userid',
        type: 'number',
        description: 'enter the userid',
        required: true
    })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                userid: {
                    type: 'number',
                    example: '23443',
                    description: 'max of 5 numbers'
                },
                username: {
                    type: 'string',
                    example: 'abc123',
                    description: 'unique name of user as alphanum'
                },
                email: {
                    type: 'string',
                    example: 'abc@gmail.com',
                    description: 'it must be in email format'
                },
                password: {
                    type: 'string',
                    example: 'ab@33',
                    description: 'unique password with max of 5 characters'
                }
            }
        }
    })
    @ApiResponse({
        status: 200,
        description: 'data deleted...',
        schema: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    email: {
                        type: 'string',
                        description: 'email of user',
                        example: 'abc@gmail.com'
                    },
                    password: {
                        type: 'string',
                        description: 'unique password with max of 5 characters',
                        example: 'sd1@2'
                    }
                }
            }
        }
    })
    remove(
        @Param('userid') userid: number, usermodeldto: Usermodeldto) {
        return this.userservice.removeuser(userid, usermodeldto)
    }
}
