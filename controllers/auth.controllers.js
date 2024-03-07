import {User} from '../model/index.js'


class Auth {
    async start(req,res){
        const {username, name} = req.body;
        try{
            if(!username){
                throw new Error("username not found");
                return;
            }
            const isExisted = await User.findOne({username});
            if(isExisted){
                throw new Error("username already existed");
                return;
            }
            const newUser = await User.create({username,name});
            res.status(200).send({
                msg:"user registered",
            });
        }
        catch (e){
            res.status(500).send(e.message);
        }
    }

    async deleteuser(req,res){
        const {username} = req.body;
        try{
            const user = await User.findOneAndDelete({username});
            console.log(user);
            if(!user) {
                throw new Error("username not found");
            }
            res.status(200).send({
                msg:"user deleted successfully"
            })
        }catch(e){
            res.status(500).send("something went wrong while deleteing user");
        }
    }
}

export default Auth;