if (!!!templates) var templates = {};
templates["shopping-cart"] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"card-header\">");t.b("\n" + i);t.b("  <div class=\"card-header-title\">Cart</div>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);t.b("<div class=\"card-content\">");t.b("\n" + i);t.b("  <div class=\"content\">");t.b("\n" + i);if(t.s(t.d("lines.length",c,p,1),c,p,0,149,351,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <ul class=\"cart-content has-delayed-animations\">");t.b("\n" + i);if(t.s(t.f("lines",c,p,1),c,p,0,217,326,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <li class=\"is-animated slides-in-left\">");t.b("\n" + i);t.b("        ");t.b(t.v(t.f("quantity",c,p,0)));t.b(" x ");t.b(t.v(t.f("name",c,p,0)));t.b(" ... ");t.b(t.v(t.f("price",c,p,0)));t.b("\n" + i);t.b("      </li>");t.b("\n" + i);});c.pop();}t.b("    </ul>");t.b("\n" + i);});c.pop();}t.b("    <hr>");t.b("\n" + i);t.b("    <strong>Total: </strong>");t.b("\n" + i);t.b("    <span class=\"total is-pulled-right\">");t.b(t.v(t.f("totalPrice",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }});
