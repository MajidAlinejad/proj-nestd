import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PayService } from './pay.service';
import { CreatePayDto } from './dto/create-pay.dto';
import { UpdatePayDto } from './dto/update-pay.dto';

@Controller()
export class PayController {
  constructor(private readonly payService: PayService) {}

  @MessagePattern('createPay')
  create(@Payload() createPayDto: CreatePayDto) {
    return this.payService.create(createPayDto);
  }

  @MessagePattern('findAllPay')
  findAll() {
    return this.payService.findAll();
  }

  @MessagePattern('findOnePay')
  findOne(@Payload() id: number) {
    return this.payService.findOne(id);
  }

  @MessagePattern('updatePay')
  update(@Payload() updatePayDto: UpdatePayDto) {
    return this.payService.update(updatePayDto.id, updatePayDto);
  }

  @MessagePattern('removePay')
  remove(@Payload() id: number) {
    return this.payService.remove(id);
  }
}
