#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os

os.chdir('d:/CC/tmp_sales_xlsx/xl/worksheets')

# Sheet 6 - F5 异议处理话术卡
sheet6 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="40" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>208</v></c></row>
    <row r="2"><c r="A2" t="s" s="4"><v>209</v></c></row>
    <row r="3"><c r="A3" t="s" s="12"><v>210</v></c><c r="B3" t="s" s="1"><v>211</v></c></row>
    <row r="4"><c r="A4" t="s" s="12"><v>212</v></c><c r="B4" t="s" s="1"><v>213</v></c></row>
    <row r="5"><c r="A5" t="s" s="12"><v>214</v></c><c r="B5" t="s" s="1"><v>215</v></c></row>
    <row r="7"><c r="A7" t="s" s="4"><v>216</v></c></row>
    <row r="8"><c r="A8" t="s" s="12"><v>217</v></c><c r="B8" t="s" s="1"><v>218</v></c></row>
    <row r="9"><c r="A9" t="s" s="12"><v>219</v></c><c r="B9" t="s" s="1"><v>220</v></c></row>
    <row r="11"><c r="A11" t="s" s="4"><v>221</v></c></row>
    <row r="12"><c r="A12" t="s" s="12"><v>222</v></c><c r="B12" t="s" s="1"><v>223</v></c></row>
    <row r="13"><c r="A13" t="s" s="12"><v>224</v></c><c r="B13" t="s" s="1"><v>225</v></c></row>
    <row r="15"><c r="A15" t="s" s="4"><v>226</v></c></row>
    <row r="16"><c r="A16" t="s" s="12"><v>227</v></c><c r="B16" t="s" s="1"><v>228</v></c></row>
    <row r="17"><c r="A17" t="s" s="12"><v>229</v></c><c r="B17" t="s" s="1"><v>230</v></c></row>
    <row r="18"><c r="A18" t="s" s="12"><v>231</v></c><c r="B18" t="s" s="1"><v>232</v></c></row>
    <row r="19"><c r="A19" t="s" s="12"><v>233</v></c><c r="B19" t="s" s="1"><v>234</v></c></row>
    <row r="20"><c r="A20" t="s" s="12"><v>235</v></c><c r="B20" t="s" s="1"><v>236</v></c></row>
    <row r="22"><c r="A22" t="s" s="4"><v>237</v></c></row>
    <row r="23"><c r="A23" t="s" s="12"><v>238</v></c><c r="B23" t="s" s="1"><v>239</v></c></row>
    <row r="25"><c r="A25" t="s" s="4"><v>240</v></c></row>
    <row r="26"><c r="A26" t="s" s="12"><v>241</v></c><c r="B26" t="s" s="1"><v>242</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
</worksheet>'''

with open('sheet6.xml', 'w', encoding='utf-8') as f:
    f.write(sheet6)

# Sheet 7 - F6 成交检查清单
sheet7 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="35" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>243</v></c></row>
    <row r="2"><c r="A2" t="s" s="4"><v>244</v></c></row>
    <row r="3"><c r="A3" t="s" s="12"><v>245</v></c><c r="B3" t="s" s="1"><v>246</v></c><c r="C3" t="s" s="12"><v>247</v></c></row>
    <row r="4"><c r="A4" t="s" s="12"><v>248</v></c><c r="B4" t="s" s="1"><v>249</v></c><c r="C4" t="s" s="12"><v>250</v></c></row>
    <row r="5"><c r="A5" t="s" s="12"><v>251</v></c><c r="B5" t="s" s="1"><v>252</v></c><c r="C5" t="s" s="12"><v>253</v></c></row>
    <row r="7"><c r="A7" t="s" s="4"><v>254</v></c></row>
    <row r="8"><c r="A8" t="s" s="12"><v>255</v></c><c r="B8" t="s" s="1"><v>256</v></c></row>
    <row r="9"><c r="A9" t="s" s="12"><v>257</v></c><c r="B9" t="s" s="1"><v>258</v></c></row>
    <row r="11"><c r="A11" t="s" s="4"><v>259</v></c></row>
    <row r="12"><c r="A12" t="s" s="12"><v>260</v></c><c r="B12" t="s" s="1"><v>261</v></c></row>
    <row r="13"><c r="A13" t="s" s="12"><v>262</v></c><c r="B13" t="s" s="1"><v>263</v></c></row>
    <row r="14"><c r="A14" t="s" s="12"><v>264</v></c><c r="B14" t="s" s="1"><v>265</v></c></row>
    <row r="15"><c r="A15" t="s" s="12"><v>266</v></c><c r="B15" t="s" s="1"><v>267</v></c></row>
    <row r="17"><c r="A17" t="s" s="4"><v>268</v></c></row>
    <row r="18"><c r="A18" t="s" s="12"><v>269</v></c><c r="B18" t="s" s="1"><v>270</v></c></row>
    <row r="19"><c r="A19" t="s" s="12"><v>271</v></c><c r="B19" t="s" s="1"><v>272</v></c></row>
    <row r="20"><c r="A20" t="s" s="12"><v>273</v></c><c r="B20" t="s" s="1"><v>274</v></c></row>
    <row r="22"><c r="A22" t="s" s="4"><v>275</v></c></row>
    <row r="23"><c r="A23" t="s" s="12"><v>276</v></c><c r="B23" t="s" s="1"><v>277</v></c></row>
    <row r="24"><c r="A24" t="s" s="12"><v>278</v></c><c r="B24" t="s" s="1"><v>279</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
</worksheet>'''

with open('sheet7.xml', 'w', encoding='utf-8') as f:
    f.write(sheet7)

# Sheet 8 - F7 客户跟进计划表
sheet8 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="15" customWidth="1"/>
    <col min="2" max="2" width="35" customWidth="1"/>
    <col min="3" max="3" width="15" customWidth="1"/>
    <col min="4" max="4" width="15" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>280</v></c></row>
    <row r="2"><c r="A2" t="s" s="4"><v>281</v></c></row>
    <row r="3"><c r="A3" t="s" s="12"><v>282</v></c><c r="B3" t="s" s="1"><v>283</v></c></row>
    <row r="4"><c r="A4" t="s" s="12"><v>284</v></c><c r="B4" t="s" s="1"><v>285</v></c></row>
    <row r="5"><c r="A5" t="s" s="12"><v>286</v></c><c r="B5" t="s" s="1"><v>287</v></c></row>
    <row r="7"><c r="A7" t="s" s="4"><v>288</v></c></row>
    <row r="8"><c r="A8" t="s" s="12"><v>289</v></c><c r="B8" t="s" s="1"><v>290</v></c></row>
    <row r="9"><c r="A9" t="s" s="12"><v>291</v></c><c r="B9" t="s" s="1"><v>292</v></c></row>
    <row r="10"><c r="A10" t="s" s="12"><v>293</v></c><c r="B10" t="s" s="1"><v>294</v></c></row>
    <row r="12"><c r="A12" t="s" s="4"><v>295</v></c></row>
    <row r="13"><c r="A13" t="s" s="12"><v>296</v></c><c r="B13" t="s" s="1"><v>297</v></c><c r="C13" t="s" s="12"><v>298</v></c></row>
    <row r="14"><c r="A14" t="s" s="12"><v>299</v></c><c r="B14" t="s" s="1"><v>300</v></c><c r="C14" t="s" s="12"><v>301</v></c></row>
    <row r="16"><c r="A16" t="s" s="4"><v>302</v></c></row>
    <row r="17"><c r="A17" t="s" s="12"><v>303</v></c><c r="B17" t="s" s="1"><v>304</v></c></row>
    <row r="19"><c r="A19" t="s" s="4"><v>305</v></c></row>
    <row r="20"><c r="A20" t="s" s="12"><v>306</v></c><c r="B20" t="s" s="1"><v>307</v></c></row>
    <row r="22"><c r="A22" t="s" s="4"><v>308</v></c></row>
    <row r="23"><c r="A23" t="s" s="12"><v>309</v></c><c r="B23" t="s" s="1"><v>310</v></c><c r="C23" t="s" s="12"><v>311</v></c><c r="D23" t="s" s="12"><v>312</v></c></row>
    <row r="24"><c r="A24" t="s" s="12"><v>313</v></c><c r="B24" t="s" s="1"><v>314</v></c><c r="C24" t="s" s="12"><v>315</v></c><c r="D24" t="s" s="12"><v>316</v></c></row>
    <row r="25"><c r="A25" t="s" s="12"><v>317</v></c><c r="B25" t="s" s="1"><v>318</v></c><c r="C25" t="s" s="12"><v>319</v></c><c r="D25" t="s" s="12"><v>320</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
</worksheet>'''

with open('sheet8.xml', 'w', encoding='utf-8') as f:
    f.write(sheet8)

# Sheet 9 - F8 销售复盘模板
sheet9 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="40" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>321</v></c></row>
    <row r="2"><c r="A2" t="s" s="4"><v>322</v></c></row>
    <row r="3"><c r="A3" t="s" s="12"><v>323</v></c><c r="B3" t="s" s="1"><v>324</v></c></row>
    <row r="4"><c r="A4" t="s" s="12"><v>325</v></c><c r="B4" t="s" s="1"><v>326</v></c></row>
    <row r="5"><c r="A5" t="s" s="12"><v>327</v></c><c r="B5" t="s" s="1"><v>328</v></c></row>
    <row r="7"><c r="A7" t="s" s="4"><v>329</v></c></row>
    <row r="8"><c r="A8" t="s" s="12"><v>330</v></c><c r="B8" t="s" s="1"><v>331</v></c></row>
    <row r="9"><c r="A9" t="s" s="12"><v>332</v></c><c r="B9" t="s" s="1"><v>333</v></c></row>
    <row r="11"><c r="A11" t="s" s="4"><v>334</v></c></row>
    <row r="12"><c r="A12" t="s" s="12"><v>335</v></c><c r="B12" t="s" s="1"><v>336</v></c></row>
    <row r="13"><c r="A13" t="s" s="12"><v>337</v></c><c r="B13" t="s" s="1"><v>338</v></c></row>
    <row r="15"><c r="A15" t="s" s="4"><v>339</v></c></row>
    <row r="16"><c r="A16" t="s" s="12"><v>340</v></c><c r="B16" t="s" s="1"><v>341</v></c></row>
    <row r="17"><c r="A17" t="s" s="12"><v>342</v></c><c r="B17" t="s" s="1"><v>343</v></c></row>
    <row r="19"><c r="A19" t="s" s="4"><v>344</v></c></row>
    <row r="20"><c r="A20" t="s" s="12"><v>345</v></c><c r="B20" t="s" s="1"><v>346</v></c></row>
    <row r="21"><c r="A21" t="s" s="12"><v>347</v></c><c r="B21" t="s" s="1"><v>348</v></c></row>
    <row r="22"><c r="A22" t="s" s="12"><v>349</v></c><c r="B22" t="s" s="1"><v>350</v></c></row>
    <row r="24"><c r="A24" t="s" s="4"><v>351</v></c></row>
    <row r="25"><c r="A25" t="s" s="12"><v>352</v></c><c r="B25" t="s" s="1"><v>353</v></c></row>
    <row r="26"><c r="A26" t="s" s="12"><v>354</v></c><c r="B26" t="s" s="1"><v>355</v></c></row>
    <row r="27"><c r="A27" t="s" s="12"><v>356</v></c><c r="B27" t="s" s="1"><v>357</v></c></row>
    <row r="29"><c r="A29" t="s" s="4"><v>358</v></c></row>
    <row r="30"><c r="A30" t="s" s="12"><v>359</v></c><c r="B30" t="s" s="1"><v>360</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
</worksheet>'''

with open('sheet9.xml', 'w', encoding='utf-8') as f:
    f.write(sheet9)

print("Sheets 6-9 created")
