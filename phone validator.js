function telephoneCheck(str) {
    const pat = [
        //xxx-xxx-xxxx
        /^\d{3}-\d{3}-\d{4}$/,
        //x xxx-xxx-xxxx
        /^1 \d{3}-\d{3}-\d{4}$/,
        //x (xxx) xxx-xxxx
        /^1 \(\d{3}\) \d{3}-\d{4}$/,
        //xxxxxxxxxx
        /^\d{10}$/,
        // (xxx) xxx-xxxx
        /^\(\d{3}\)\d{3}-\d{4}$/,
        // x xxx xxx xxxx
        /^1 \d{3} \d{3} \d{4}$/,
        //1(xxx)xxx-xxxx
        /^1\(\d{3}\)\d{3}-\d{4}/


    ]
    
    return pat.some((pattern) => pattern.test(str));
  }
  
  telephoneCheck("555-555-5555");