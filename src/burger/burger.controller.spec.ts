import { Test, TestingModule } from '@nestjs/testing';
import { BurgerController } from './burger.controller';

describe('BurgerController', () => {
  let controller: BurgerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BurgerController],
    }).compile();

    controller = module.get<BurgerController>(BurgerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
