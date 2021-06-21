import {CANARY_NET, Networks, TEST_NET} from "./constants"

const network =
  process.env.NEXT_PUBLIC_NETWORK === CANARY_NET ? CANARY_NET : TEST_NET
const testNetUrl = process.env.NEXT_PUBLIC_TEST_NET_URL
if (!testNetUrl) throw "Missing NEXT_PUBLIC_TEST_NET_URL"

const canaryNetUrl = process.env.NEXT_PUBLIC_CANARY_NET_URL
if (!canaryNetUrl) throw "Missing NEXT_PUBLIC_CANARY_NET_URL"

export type PublicConfig = {
  network: Networks
  testNetUrl: string
  canaryNetUrl: string
  hcaptchaSiteKey: string
}

const publicConfig: PublicConfig = {
  network,
  testNetUrl,
  canaryNetUrl,
  hcaptchaSiteKey:
    process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ||
    "10000000-ffff-ffff-ffff-000000000001",
}

export default publicConfig
