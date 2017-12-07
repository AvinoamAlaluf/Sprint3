import EmailService from '../../services/EmailService.js'

export default {
    template: `
        <section class="emailToolBar">
        <form>
        <input class="mailSearch" type="text" placeholder="🔎 search">
        <div id='cssmenu'>
        <ul>
           <li class='active has-sub'><a href='#'><span>Fliter</span></a>
              <ul>
                 <li class='has-sub'><a href='#'><span>All</span></a>
                    <ul>
                       <li><a href='#'><span>Sub Product</span></a></li>
                       <li class='last'><a href='#'><span>Sub Product</span></a></li>
                    </ul>
                 </li>
                 <li class='has-sub'><a href='#'><span>Read</span></a>
                    <ul>
                       <li><a href='#'><span>Sub Product</span></a></li>
                       <li class='last'><a href='#'><span>Sub Product</span></a></li>
                    </ul>
                 </li>
                 <li class='has-sub'><a href='#'><span>Unred</span></a>
                 <ul>
                    <li><a href='#'><span>Sub Product</span></a></li>
                    <li class='last'><a href='#'><span>Sub Product</span></a></li>
                 </ul>
              </li>
              <li class='has-sub'><a href='#'><span>Marked</span></a>
              <ul>
                 <li><a href='#'><span>Sub Product</span></a></li>
                 <li class='last'><a href='#'><span>Sub Product</span></a></li>
              </ul>
           </li>
              </ul>
           </li>
        
        </ul>
        </div>
        </form>
        </section>
       

       
    `,
    data() {
        return {

        }
    },
    methods: {
       
    },
    created() {
    console.log('toolbar');
    },
    props: {
       
    }
}