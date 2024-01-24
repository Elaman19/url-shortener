import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/model/user.model';
import { Account, AccountSchema } from './model/account.model';
import { Transaction, TransactionSchema } from 'src/transaction/model/transaction.model';
import { AccountController } from './account.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema },
                               { name: Account.name, schema: AccountSchema },
                               { name: Transaction.name, schema: TransactionSchema}]),
  ],
  providers: [AccountService],
  controllers: [AccountController]
})
export class AccountModule {}
