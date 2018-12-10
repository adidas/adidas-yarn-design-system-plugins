<script>
import { getPlugins } from '~/services/plugins';

const REDIRECT_STATUS_CODE = 301;

export default {
  fetch({ redirect }) {
    const [ firstPlugin ] = getPlugins();

    redirect(REDIRECT_STATUS_CODE, `/plugins/${ firstPlugin }`);
  }
};
</script>
