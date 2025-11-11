<!-- Papka va fayllar tuzilmasi har bir papka nima vazifada ochilganini tushuntirilgan   -->
# public/

Statik resurslar (favicon, robots.txt, statik rasmlar) shu yerga qo‘yiladi.

Bu fayllar build vaqtida o‘zgarmasdan servis qilinadi.

# src/

Barcha manba kodi.

# src/assets/

Rasm, svg, shrift, audio/video kabi aktivlar.

Katta, o‘zgarmas fayllar uchun public/, komponent ichida import qilinadigan aktivlar uchun assets/ tavsiya etiladi.

# src/components/

Qayta ishlatiladigan UI komponentlar (atomlar, molekulalar).

Masalan: Button, Input, Card va h.k.

Kichik bo‘limlar: components/form/, components/layout/ yaratish mumkin.

# src/pages/

Sahifa darajasidagi komponentlar (agar Router ishlatsangiz).

Masalan: HomePage.tsx, AboutPage.tsx.

Har sahifa ichida o‘ziga xos kichik komponentlar bo‘lsa, pages/Home/components/ kabi lokal joylashtirish mumkin.

# src/hooks/

Custom React hooklar (useCounter, useDebounce, useFetch).

UI-dan mustaqil, qayta ishlatiladigan biznes/holat mantiqlari.

# src/context/

React Context API bilan global holat boshqaruvi.

Masalan: ThemeProvider, AuthProvider.

# src/lib/

Tashqi servislar va integratsiyalar: apiClient, http qatlam (fetch/axios), storage, i18n sozlamalari.

Bir joyda konfiguratsiya qilib, hamma joyda import qilish oson bo‘ladi.

# src/styles/

Global va modul CSS fayllari: global.css, reset.css, variables.css.

Agar CSS-in-JS ishlatsangiz (masalan, styled-components), baribir umumiy global sozlamalar shu yerda turishi mumkin.

# src/types/

Umumiy TypeScript tiplari va *.d.ts deklaratsiya fayllari.

Server response interfeyslari, domen modellar (User, Product) shu yerga.

# src/utils/

Yordamchi funksiyalar: cn (className birlashtirish), date, number, string util-lar.

Yon ta’sirsiz, sof funksiyalar bo‘lishi tavsiya etiladi.# MiniGroup8
