import { IUser, User } from "../lib/model/user.model";

async function create({ name, address, tel }: IUser) {
  const user = new User();

  user.name = name;
  user.address = address;
  user.tel = tel;

  await user.save();
}


async function findOne({ name }: Pick<IUser, "name">) {
  const user = await User.findOne({ name });

  return user;
}

export { 
  create as createUser, 
  findOne as findUser
};
