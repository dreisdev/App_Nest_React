import { PartialType } from "@nestjs/mapped-types";
import CreateTaskDto from "./create-task";

export class DeleteTaskDto extends PartialType(CreateTaskDto) { }