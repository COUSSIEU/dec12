import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 21499,
  login: 'T{qkY}@u\\`MNa-l\\zrIM',
};

export const sampleWithPartialData: IUser = {
  id: 30435,
  login: 'M@7sN\\k3kvNP\\5cyIch3\\imZHMy\\=kD4',
};

export const sampleWithFullData: IUser = {
  id: 14686,
  login: 'oZ5F',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
