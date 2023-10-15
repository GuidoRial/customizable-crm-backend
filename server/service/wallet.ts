import { Service, Inject } from "typedi";
import Agenda from "agenda";
import WalletModel from "../models/wallet";
import { IWallet } from "../interfaces/IWallet";
import CRUDBase from "./base";
@Service()
export default class WalletService extends CRUDBase<
  typeof WalletModel,
  IWallet
> {
  constructor() {
    super(WalletModel);
  }
}
