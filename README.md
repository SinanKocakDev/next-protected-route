Bu projede next ile korulamalı route'lar oluşturulmuştur.

utils klasöründe geçiçi bir session oluşturulmuştur.
Oluşturulan bu session göre anasayfada oluşturulan endpointlere erişim sağlanmaktadır.

Not: Bunun için nextjs'in middleware.js dosyasını projenin kök dizininde olmalıdır.


Middleware'daki config nesnesini aşağıdaki gibi yapabilirsin.
böylece istediğin route ' a özel protected ayarlayabilirsin.

```bash
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
```
örnek vermek gerekirse ..

admin/viewuser endpointini özel olarak protected yapmak için

```js
import { getSession } from "@/utils/getSession";
import { notFound } from "next/navigation";

const ViewUser = async () => {
    const session = await getSession();
    if(session.role !== "admin") {
        notFound()
    }
  return <div>List All View User </div>
}

export default ViewUser

```

ayrıca session'da oluşuturulan role ile admin ise şu route'a erişim izni değilse şu route'a erişemez şeklinde işlemler vardır.

19.10.2024