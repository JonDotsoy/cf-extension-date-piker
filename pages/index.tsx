import { FC, useEffect } from 'react'


export const Page: FC = () => {

    useEffect(() => {
        globalThis.contentfulApp?.init(extension => {
            const value = extension.field.getValue()
            console.log('Init')
            console.log(value)
        })
    }, []);

    return <>Hola</>
}

export default Page;
