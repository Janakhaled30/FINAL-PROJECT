import './V';
import'../../top visits/T';
function  Slider(){


    useEffect(() => {
        $(".custom-carousel").owlCarousel({
            autoWidth: true,
            loop: true
          });
        });

$(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });
   

    return(
    <div classname="top">
        <section class="game-section">
        <h2 class="line-title">Top Visits</h2>
        <div class="owl-carousel custom-carousel owl-theme custom-carousel"></div>
            <div class="item"
                style="background-image: url(https://i.pinimg.com/564x/bf/54/52/bf545237fa7e48164055f8f3e99e82e7.jpg);">
                <div class="item-desc">
                    <h3>Bibliothica Alexandria</h3>
                    <p>The Bibliotheca Alexandrina is a major library and cultural center on the shore of the Mediterranean Sea in Alexandria, Egypt. It is a commemoration of the Library of Alexandria,
                        once one of the largest libraries worldwide, which was lost in antiquity..</p>
                </div>
            </div>
            <div class="item"
                style="background-image: url(https://media.gettyimages.com/id/1350603279/photo/the-qaitbay-citadel-of-alexandria-by-the-mediterranean.jpg?s=612x612&w=0&k=20&c=k3klmWp6s2V42Z8QwDn-JIKsfs0do7ueoDvFkjidLLw=);">
                <div class="item-desc">
                    <h3>Qaitbay Citadel</h3>
                    <p>The Qaitbay Citadel in Alexandria is considered one of the most important defensive strongholds, not only in Egypt, but also along the Mediterranean Sea coast.
                        It formulated an important part of the fortification system of Alexandria in the 15th century AD
                    </p>
                </div>
            </div>
            <div class="item"
                style="background-image: url(https://media.gettyimages.com/id/1644907177/photo/carved-tombs-of-the-kom-el-shoqafa-catacombs-of-alexandria-egypt.jpg?s=612x612&w=0&k=20&c=1DrnljLi0lbIdd_Im4ItuuXiGMKZ5k74hIfACTUvPnk=);">
                <div class="item-desc">
                    <h3>Catacombs of Kom el Shoqafa</h3>
                    <p>The catacombs of Kom El Shoqafa is a historical archaeological site located in Alexandria,
                    Egypt, and is considered one of the Seven Wonders of the Middle Ages.</p>
                </div>
            </div>

            <div class="item"
                style="background-image: url(https://i.pinimg.com/564x/34/a9/94/34a99491c3dbde105bcdbcec103610e8.jpg);">
                <div class="item-desc">
                    <h3>Montaza Palace</h3>
                    <p>Montaza Palace is a palace, museum and extensive gardens in the Montaza district of Alexandria,
                    Egypt. It was built on a low plateau east of central Alexandria overlooking a beach on the Mediterranean Sea.</p>
                </div>
            </div>

            <div class="item"
            style="background-image: url(https://i.pinimg.com/564x/98/1b/a1/981ba110e4ae660cdf4a243d9d87b66c.jpg);">
            <div class="item-desc">
                <h3>Sayed Darwesh theatre or Alexandria Opera House</h3>
                <p>Alexandria Opera House or Sayed Darwish Theatre was built in 1918 and opened in 1921 in the city of Alexandria,
                Egypt. When it opened, it was named Teatro Mohamed Ali.</p>
            </div>
        </div>
        </section>
    </div>
    )}
export default Slider;

