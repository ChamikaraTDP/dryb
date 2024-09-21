import { IUser, User } from "../lib/model/user.model";

async function create({ name, address, tel }: IUser) {
  const user = new User();

  user.name = name;
  user.address = address;
  user.tel = tel;

  await user.save();

  return user;
}


async function findOne(name: string) {
  const user = await User.findOne({ name }).exec();

  return user;
}

export { 
  create as createUser, 
  findOne as findUser
};
