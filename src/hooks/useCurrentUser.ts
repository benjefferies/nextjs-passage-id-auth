import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import { useEffect, useState } from "react";

type CurrentUser = {
    isLoading: boolean;
    isAuthorized: boolean;
    username: string;
};

export function useCurrentUser() {
    const [result, setResult] = useState<CurrentUser>({
        isLoading: true,
        isAuthorized: false,
        username: '',
    });

    useEffect(() => {
        let cancelRequest = false;
        let user = undefined;
        try {
            user = new PassageUser();
        } catch (e) {
            setResult({
                isLoading: false,
                isAuthorized: false,
                username: ''
                ,
            });
            return () => {
                cancelRequest = true;
            }
        }
        user.userInfo().then(userInfo=> {
            if( cancelRequest ) {
                return;
            }
            if(userInfo === undefined){
                setResult({
                    isLoading: false,
                    isAuthorized: false,
                    username: "",
                });
                return;
            }
            setResult({
                isLoading: false,
                isAuthorized: true,
                username: userInfo.email ? userInfo.email : userInfo.phone
                ,
            });
        });
        return () => {
            cancelRequest = true;
        };
    }, []);
    return result;
}