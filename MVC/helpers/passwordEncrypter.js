import bcrypt from 'bcrypt';

class passwordEncrypter{
    static async encrypt(password){
        const saltRounds=10;
        const hashedPassword= await bcrypt.hash(password,saltRounds);
        return hashedPassword;
    }

    static async compare(password, hashedPassword){
        return await bcrypt.compare(password, hashedPassword);
    }
}

export default passwordEncrypter;