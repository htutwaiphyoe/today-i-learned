# October

`timeout` specifies the number of milliseconds before the request times out. If the request takes longer than `timeout`, the request will be aborted.

timeout: 1000, // default is `0` (no timeout)

<https://github.com/axios/axios/blob/main/README.md#request-config>

CertyIQ for dump

<https://www.certyiq.com/papers/amazon/aws-certified-cloud-practitioner-clf-c02/1>

<https://gist.github.com/DavidWells/7d2e0e1bc78f4ac59a123ddf8b74932d?permalink_comment_id=4180979>

Date between dates moment => moment().isBetween(moment-like, moment-like)

<https://stackoverflow.com/questions/14897571/moment-js-date-between-dates>

<https://github.com/alex/what-happens-when>

[https://stackoverflow.com/questions/41063361/what-is-the-double-left-arrow-syntax-in-yaml-called-and-wheres-it-specifi](https://stackoverflow.com/questions/41063361/what-is-the-double-left-arrow-syntax-in-yaml-called-and-wheres-it-specifi)

[naming-conventions-for-git-branches](https://medium.com/@abhay.pixolo/naming-conventions-for-git-branches-a-cheatsheet-8549feca2534)

[radio w3](https://www.w3.org/TR/2017/WD-wai-aria-practices-1.1-20170628/examples/radio/radio-1/radio-1.html)

- Create S3 bucket to upload trifecta code with github actions CI/CD using AWS access key and secret key
- Enable Static website hosting in s3
- Create CloudFront distribution and link with s3 bucket policy
- Point Alternative domain to CloudFront Distribution in Route 53

[typescript-based-sdk](https://dev.to/jamesoyanna/developing-and-publishing-a-typescript-based-sdk-3pph)

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "1",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::staging-bp/*"
        },
        {
            "Sid": "2",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity E1YNW4JZ9YAJ7E"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::staging-bp/*"
        }
    ]
}

- create amplify and link custom domain dns (auto-generated cloudfront url) in route 53
- use cloudfront url in rewrite and redirect for custom redirect

[color function css](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color)

[object html tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object)

Flutter: Xcode error "Unable to boot the Simulator"

```bash
rm -r ~/Library/Developer/CoreSimulator/Caches
```

[accessibilityassociation](https://www.accessibilityassociation.org/s/)

[web-accessibility](https://css4u.gitbook.io/accessibility/accessibility/web-accessibility)

[accessibility](https://css4u.gitbook.io/accessibility)

[a11ycalendar](http://a11ycalendar.kaseybon.com/perceivable-1-1.html)

[GSAP-Parallax-Effect](https://github.com/joeunhye/GSAP-Parallax-Effect)

[dashed-border-generator](https://kovart.github.io/dashed-border-generator/)

[sourcegit](https://sourcegit-scm.github.io/)

[qr-login](https://github.com/kyawzaymoore/qr-login)

[CSS Units Best Practices](https://gist.github.com/basham/2175a16ab7c60ce8e001)

[media-query-units](https://zellwk.com/blog/media-query-units/)

[tailwindcss-motion](https://github.com/romboHQ/tailwindcss-motion)

make list as scrollable with max height, put the CTAs below the list
