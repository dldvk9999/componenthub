// 컴포넌트 json 타입 지정
export interface componentsType {
    [key: string]: {
        [key: string]: {
            id: number;
            image: string;
            title: string;
            contents: string;
            github: string;
        };
    };
}
