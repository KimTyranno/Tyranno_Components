// svg파일 import하기 위해서 적음 (tsconfig에도 썼음)
declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}
