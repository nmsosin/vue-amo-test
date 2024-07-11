// amoCRM API methods
const BASE_URL = "https://www.amocrm.ru";

export const getAccess = async () => await fetch(`${BASE_URL}//oauth2/access_token`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    client_id: "34c31c6f-7d2a-40b3-bedd-397f5f0466f1",
    client_secret: "amYS5255gZUpNbkIMKeUaXLxMOiQpE07k7RDOvXhgBl7vjP3hptmli2PesxhQQhN",
    "grant_type": "authorization_code",
    "code": "def50200acfdb1be0c9de628b5d6b572cb15912b55fc70333a169062b8bbb26100fd078b82286daaf55acdbe67c943a54f956056bd00b1992d095e5411f57ec8dd1c25ae34326e96192e31d39d42db6f54664d84090306ccfb1c5cfa312ea016fd649f3ed3f6b664b798ea25d45cc1194c2670cb687c9662ae1bbc204a74d33d1d01573c0873b19423d590113615244ed8b0217574b35f7573ab5b5c5691b537442ac2b004078fbdcc70ef09f9dcdd4eaae915ceb738a2dd4aa159de8913f283308f3df98aaf2675626b6380ba18cf13c2c84f9b537ff687793f49e590c4a293f1d0c4a615ce47097ade27cfe6f43e4d0174e872d1beabbb4061fa93c849c91bf28a997f129f3445c13d8554fafe4795c4ccde670ddcc762446fa08270c24aa0cfb8c8b22b844ea6bb9045c39f8534b09d0f09687cd703748cbcfddef7fa2274cde9da60624d890a6451e026647b26aff9d004951253d01a112bda9e17ae19f15e85feba889a8ecb545f120ad85b7967bcdcd39036fb951fd15d3f99cdf06987e5a1062421139153dc72c445ea8116186e4f9f7a28802cb5dc556a748b9686ad0d2c7669e2ad17e0d349accd3756dff74437134e137f2a88bc5805efab7317691cbb7be55e555065",
    "redirect_uri": "https://github.com/nmsosin",
  })
})