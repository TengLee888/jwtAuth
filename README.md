## 步驟
- 請看step1.png & step2.png
- 比對database和用戶輸入的資料
- 讓用戶產生token
- 比對token




## JWT JSON web token
https://segmentfault.com/a/1190000005783306
- Session 有個問題，那就是具狀態性（Stateful）還有容易受跨網域請求偽造攻擊（CSRF Attack）。
- 由於 Session 是儲存在伺服端的，這意味著客戶端在發送請求時幾乎不用提供什麼資訊
- Token 本身是不帶資訊的且無狀態性的（Stateless），當伺服器接收到 Token 時，會主動去對應使用者的資料表，接著就能夠知道這個 Token 代表著哪個使用者，然後抓出相關的資訊來使用。
- 由於使用者現在必須主動提供 Token，也順帶解決了跨網域請求偽造攻擊
- 當我們使用傳統 Token 時，我們需要呼叫資料庫並且比對這一個 Token 是誰的，然後我們才能夠取得該使用者的資料。當有大量使用者湧入時，這可能會令伺服器負荷不堪。
- 而 JWT 解決了這個問題，因為我們可以直接把使用者資料存放在「Token」中，所以也就省去了額外的資料庫開銷。且在微服務架構中也能夠方便地分享使用者資料。
- Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token.
